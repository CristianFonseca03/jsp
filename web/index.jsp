<%--
    Document   : index
    Created on : 15/06/2018, 02:32:02 PM
    Author     : Sala 6
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="scripts.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body bgcolor="#48c9b0" onload="load()">
        Departamento <select id="dpto" onchange="changeTowns()">
          <option>Seleccione Departamento</option>
        </select><p>
        Municipio <select id="town">
          <option>Seleccione Municipio</option>
        </select>
        <p id="output"></p>
    </body>
</html>
