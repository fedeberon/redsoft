<html>
<head>
    <title>La Red Site</title>
    <style>
        .b1 {
            border: 3px solid;}
        .b2 {
            border: 1px solid;
            background-color: black;
            color: white;}
        .paramp {
            width: 75px;
            text-align: center;}
        .center-h {
            justify-content: center;
            display: inline-grid;}
        .center-v {
            align-items: center;
            text-align: center;}
        .container2 {
            background-color: azure;
            display: grid;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            height: 100px;
            justify-content: center;}
    </style>
</head>
<body>
<div class="banddesktop">
    <div class="band2">
        <div class="container2">
            <div class="row-col-12" >
                <div class="col">
                    <h2>Datos de la compra</h2><br/>
                </div>
            </div>
        </div>
    </div >
</div>
<div>
    <div class="container2 center-h center-v">
        <div class="row">

        </div><definition name="order-prueba" extends="template-def">
        <put-attribute name="title" value="order-prueba"/>
        <put-attribute name="body" value="/WEB-INF/views/pages/order/prueba.jsp" />
    </definition>
        <div class="row">
            <div class="col-6 center-v">
                            <span class="alerticon"><img style="height: 100px; text-align: center;"
                                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png"
                                                         alt="checkmark"/></span><br/>
            </div>
            <div class="col-8" style="background-color: azure;">

                <table class="table mp-show b1">
                    <thead>
                    <tr class="b2">
                        <th class="paramp" scope="col">Parameters</th>
                        <td class="paramp" scope="col"></td>
                        <th class="paramp" scope="col">Values</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="row"><p class="text-center"><strong>Collection Id</strong></p></td>
                        <td class="paramp" ><span class="alerticon"><img style="height: 25px;" src="http://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></span></td>
                        <td class="paramp" ><%=request.getParameter("collection_id")%></td>
                    </tr>
                    <tr>
                        <td scope="row"><p class="text-center"><strong>Collection Status</strong></p></td>
                        <td class="paramp" ><span class="alerticon"><img style="height: 25px;" src="http://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></span></td>
                        <td class="paramp" ><%=request.getParameter("collection_status")%></td>
                    </tr>
                    <tr>
                        <td scope="row"><p class="text-center"><strong>External Reference</strong></p></td>
                        <td class="paramp" ><span class="alerticon"><img style="height: 25px;" src="http://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></span></td>
                        <td class="paramp" ><%=request.getParameter("external_reference")%></td>
                    </tr>
                    <tr>
                        <td scope="row"><p class="text-center"><strong>Payment Type</strong></p></td>
                        <td class="paramp" ><span class="alerticon"><img style="height: 25px;" src="http://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></span></td>
                        <td class="paramp" ><%=request.getParameter("payment_type")%></td>
                    </tr>
                    <tr>
                        <td scope="row"><p class="text-center"><strong>Merchant Order Id</strong></p></td>
                        <td class="paramp" ><span class="alerticon"><img style="height: 25px;" src="http://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></span></td>
                        <td class="paramp" ><%=request.getParameter("merchant_order_id")%></td>
                    </tr>
                    <tr>
                        <td scope="row"><p class="text-center"><strong>Preference Id</strong></p></td>
                        <td class="paramp" ><span class="alerticon"><img style="height: 25px;" src="http://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></span></td>
                        <td class="paramp" ><%=request.getParameter("preference_id")%></td>
                    </tr>
                    <tr>
                        <td scope="row"><p class="text-center"><strong>Site Id</strong></p></td>
                        <td class="paramp" ><span class="alerticon"><img style="height: 25px;" src="http://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></span></td>
                        <td class="paramp" ><%=request.getParameter("site_id")%></td>
                    </tr>
                    <tr>
                        <td scope="row"><p class="text-center"><strong>Proccesing mode</strong></p></td>
                        <td class="paramp" ><span class="alerticon"><img style="height: 25px;" src="http://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></span></td>
                        <td class="paramp" ><%=request.getParameter("processing_mode")%></td>
                    </tr>
                    <tr>
                        <td scope="row"><p class="text-center"><strong>Merchant Account Id</strong></p></td>
                        <td class="paramp" ><span class="alerticon"><img style="height: 25px;" src="http://assets.webiconspng.com/uploads/2017/02/Right-Arrow-Icon-PNG-300x300.png"/></span></td>
                        <td class="paramp" ><%=request.getParameter("merchant_account_id")%></td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <button className="btn-primary btn-lg"><a href="http://localhost:3000">Volver</a></button>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
