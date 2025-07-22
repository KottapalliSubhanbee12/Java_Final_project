import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

public class Main extends HttpServlet {
    private Map<String, String> credentials = new HashMap<>();
    private Map<String, Integer> balances = new HashMap<>();
    private Map<String, List<String>> histories = new HashMap<>();

    @Override
    public void init() {
        credentials.put("1234", "1111");
        credentials.put("5678", "2222");
        balances.put("1234", 5000);
        balances.put("5678", 10000);
        histories.put("1234", Arrays.asList("Paid ₹200 at SuperMart", "Received ₹1000 from UPI"));
        histories.put("5678", Arrays.asList("Paid ₹500 for Electricity", "Received ₹300 from friend"));
    }

    private boolean authenticate(String card, String code) {
        return credentials.containsKey(card) && credentials.get(card).equals(code);
    }

    private void respond(HttpServletResponse response, String msg) throws IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h2>" + msg + "</h2>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String path = request.getServletPath();
        String card = request.getParameter("cardNumber");
        String code = request.getParameter("secretCode");

        if (!authenticate(card, code)) {
            respond(response, "Invalid card or secret code!");
            return;
        }

        switch (path) {
            case "/swipe":
                respond(response, "Card " + card + " swiped successfully!");
                break;
            case "/balance":
                respond(response, "Your balance is ₹" + balances.get(card));
                break;
            case "/history":
                List<String> history = histories.get(card);
                respond(response, "Transaction History:<br>" + String.join("<br>", history));
                break;
            default:
                respond(response, "Unknown action.");
        }
    }
}

