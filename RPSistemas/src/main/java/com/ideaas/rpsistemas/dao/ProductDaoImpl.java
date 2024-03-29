package com.ideaas.rpsistemas.dao;

import com.ideaas.rpsistemas.dao.interfaces.ProductDao;
import com.ideaas.rpsistemas.domain.Product;
import com.ideaas.rpsistemas.configuration.CloseableSession;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Tuple;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductDaoImpl implements ProductDao {

    private SessionFactory hibernateFactory;

    @Autowired
    public ProductDaoImpl(EntityManagerFactory factory) {
        if(factory.unwrap(SessionFactory.class) == null){
            throw new NullPointerException("factory is not a hibernate factory");
        }
        this.hibernateFactory = factory.unwrap(SessionFactory.class);
    }

    @Override
    public List<Product> findAll() {
        List products = new ArrayList<>();
        try (CloseableSession session = new CloseableSession(hibernateFactory.openSession())) {
            Query query = session.delegate().createNativeQuery("exec sto_stock_lista @lista_codi = :lista_codi   , @activo = :activo", Tuple.class)
                    .setParameter("lista_codi", "LCO")
                    .setParameter("activo", "S");


            List<Tuple> result = query.getResultList();
            result.forEach(row -> products.add(new Product()
                    .withCode(String.valueOf(row.get("cod_articulo")))
                    .withCantiStock((BigDecimal)(row.get("canti_stock")))
                    .withWebLink(String.valueOf(row.get("web_link")))
                    .withPorcenDescuento((BigDecimal)(row.get("porcen_descuen")))
                    .withDescAdicional(String.valueOf(row.get("desc_adicional")))
                    .withPriceUni(String.valueOf(row.get("precio_uni")))
                    .withPriceUniVta((BigDecimal)(row.get("precio_uni_vta")))
                    .withDescription(String.valueOf(row.get("descrip_arti")))));

            return products;
        } catch (Exception e) {
            throw e;
        }
    }
}
