import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class WebController {
    /*TODO: Add jdbc URL, username and passwprd */
    public static final String url = "";
    public static final String username = "";
    public static final String password = "";

    //TODO: Connect to the DB
    public static Connection throws Exception {
        Class.forName("com.mysql.jdbc.Driver");
        Connection con = DriverManager.getConnection(url, username, password);

    }
}