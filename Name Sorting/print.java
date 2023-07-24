import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class print {
  public static void main(String[] args) throws FileNotFoundException {
    Scanner scanner = new Scanner(new File("Name Sorting/names.txt"));
    
    while (scanner.hasNextLine()) {
      String[] name = scanner.nextLine().split("\\s+");
      System.out.println("\"" + name[0] + " " + name[0] + "\",");
    }
  }
}
