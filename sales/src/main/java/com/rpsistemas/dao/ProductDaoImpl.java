package com.rpsistemas.dao;

import com.rpsistemas.configuration.CloseableSession;
import com.rpsistemas.dao.interfaces.ProductDao;
import com.rpsistemas.domain.Product;
import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Tuple;
import javax.persistence.TupleElement;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductDaoImpl implements ProductDao {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProductDaoImpl.class);

    private SessionFactory sessionFactory;

    @Autowired
    public ProductDaoImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public Product save(Product product){
        try (CloseableSession session = new CloseableSession(sessionFactory.openSession())){
            return (Product) session.delegate().save(product);
        }
    }

    @Override
    public List<Product> findAll() {
        List products = new ArrayList<>();
        try (CloseableSession session = new CloseableSession(sessionFactory.openSession())){
            Query query = session.delegate().createNativeQuery("exec sto_stock_lista @lista_codi = :lista_codi   , @activo = :activo", Tuple.class)
                    .setParameter("lista_codi", "LCO")
                    .setParameter("activo", "S");

            List<Tuple> result = query.getResultList();
            result.forEach(row -> products.add(new Product()
                    .withCode(String.valueOf(row.get("cod_articulo")))
                    .withDescription(String.valueOf(row.get("descrip_arti")))));

            return products;
        }
        catch (Exception e){
            LOGGER.error("No se pudo ejecutar la consulta para obtener los productos.", e);
            throw e;
        }
    }
}
