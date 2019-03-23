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

@WebServlet("/createNewAccount")
public class createNewAccount extends HttpServlet {
    public void createNewAccount(HttpServletRequest request, HttpServletResponse response) throws  ServletException, IOException {
        Connection con = webController.connectDB();

        //TODO:query to add username and password to DB
        PreparedStatement statement = con.prepareStatement("");

        statement.executeUpdate();
    }
}