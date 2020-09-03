package com.ideaas.lared.web;


import com.ideaas.lared.domain.MPReceipt;
import com.ideaas.lared.domain.Order;
import com.ideaas.lared.service.interfaces.MPReceiptService;
import com.ideaas.lared.service.interfaces.MercadoPagoService;
import com.mercadopago.exceptions.MPConfException;
import com.mercadopago.exceptions.MPException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("cart")
public class CartController {

    private MercadoPagoService mercadoPagoService;

    private MPReceiptService mpReceiptService;

    @Autowired
    public CartController(MercadoPagoService mercadoPagoService, MPReceiptService mpReceiptService) throws MPConfException {
        this.mercadoPagoService = mercadoPagoService;
        this.mpReceiptService = mpReceiptService;
    }

    @RequestMapping("pay")
    public String pay(@RequestBody Order order) throws MPException {
        String createPayment = mercadoPagoService.createAndRedirect(order);

        return "redirect:".concat(createPayment);
    }

    @RequestMapping("success")
    public String success(@RequestParam(value = "collection_id", defaultValue = "null") String collectionId,
                          @RequestParam(value = "collection_status", defaultValue = "null") String collectionStatus,
                          @RequestParam(value = "external_reference", defaultValue = "null") String externalReference,
                          @RequestParam(value = "payment_type", defaultValue = "null") String paymentType,
                          @RequestParam(value = "merchant_order_id", defaultValue = "null") String merchantOrderId,
                          @RequestParam(value = "preference_id", defaultValue = "null") String preferenceId,
                          @RequestParam(value = "processing_mode", defaultValue = "null") String processingMode,
                          @RequestParam(value = "merchant_account_id", defaultValue = "null") String merchantAccountId,
                          RedirectAttributes redirectAttributes){
        MPReceipt receipt = new MPReceipt().withCollectionId(collectionId)
                                            .withCollectionStatus(collectionStatus)
                                            .withExternalReference(externalReference)
                                            .withPaymentType(paymentType)
                                            .withMerchantAccountId(merchantAccountId)
                                            .withMerchantOrderId(merchantOrderId)
                                            .withPreferenceId(preferenceId)
                                            .withProcessingMode(processingMode)
                                            .withPreferenceId(preferenceId);
        mpReceiptService.save(receipt);
        redirectAttributes.addAttribute("id", receipt.getPreferenceId());
        return "redirect:/order/byPreferenceId";
    }

    @RequestMapping("failure")
    public String failure(@RequestBody MPReceipt receipt){
        mpReceiptService.save(receipt);
        return "";
    }

    @RequestMapping("pending")
    public String pending(@RequestBody MPReceipt receipt){
        mpReceiptService.save(receipt);
        return "";
    }



}
