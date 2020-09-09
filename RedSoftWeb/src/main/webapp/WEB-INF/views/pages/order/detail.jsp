<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<div class="banddesktop">
    <div class="band1" >
        <div class="container">
            <div class="spacer"></div>
        </div>
    </div>
    <div class="band2">
        <div class="container">
            <div class="row" >
                <div class="col">
                </div>
            </div>
        </div>
    </div >
</div>
<div>
    <div class="container center-h center-v">
        <div class="row">
            <h1>Compra Realizada!</h1><br/>
        </div><definition name="order-prueba" extends="template-def">
        <put-attribute name="title" value="order-prueba"/>
        <put-attribute name="body" value="/WEB-INF/views/pages/order/prueba.jsp" />
    </definition>
        <div class="row">
            <div class="col-6">
                            <span class="alerticon"><img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png"
                                    alt="checkmark"/></span><br/>
            </div>
            <div class="col-8">
                <table class="table mp-show">

                    <thead>
                    </thead>
                    <tbody class="text-center">
                    <tr>
                        <td scope="row"><p class="text-center"><strong>Monto pagado</strong></p></td>
                        <td><%=request.getParameter("preference_id")%></td>
                        <td><img | src="https://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></td>
                        <td>$299</td>
                    </tr>
                    <tr>
                        <td scope=" row"><p class="text-center"><strong>Estado de compra</strong></p></td>
                        <td><%=request.getParameter("collection_status")%></td>
                        <td><img style="height: 25px;" src="https://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></td>
                        <td>Aprobado</td>
                    </tr>
                    <tr>
                        <td scope=" row"><p class="text-center"><strong>Medio de pago</strong></p></td>
                        <td><%=request.getParameter("payment_type")%></td>
                        <td><img style="height: 25px;" alt="check" src="https://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></td>
                        <td>Tarjeta de crédito</td>
                    </tr>
                    <tr>
                        <td scope=" row"><p class="text-center"><strong>N° de compra</strong></p></td>
                        <td><%=request.getParameter("merchant_order_id")%></td>
                        <td><img style="height: 25px;" src="https://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></td>
                        <td>47374829359</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
</html>
