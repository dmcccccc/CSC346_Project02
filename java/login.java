import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import WebController;

@WebServlet("/login")
public class login extends HttpServlet {
    public void login(HttpServletRequest request, HttpServletResponse response) throws  ServletException, IOException {
        Connection con = webController.connectDB();

        //TODO:query to check if username and password exist and match
        PreparedStatement statement = con.prepareStatement("");

        statement.executeQuery();
    }
}