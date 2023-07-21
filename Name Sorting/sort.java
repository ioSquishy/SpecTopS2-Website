import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class sort {
    
    public static void main(String[] args) throws FileNotFoundException {
        ArrayList<Name> names = new ArrayList<>();
        Scanner scanner = new Scanner(new File("Name Sorting/names.txt"));

        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            String[] parts = line.split("\\s+"); // split by whitespace
            if (parts.length == 2) { 
                Name name = new Name(parts[0], parts[1]);
                names.add(name);
            }
        }
        scanner.close();
        Collections.sort(names, new NameComparator());
        
        int cols = 4;
        int namesPerCol = names.size() / cols;
        for (int i = 0; i < names.size(); i++) {
            
            if (i > 0 && i % namesPerCol == 0) {
                System.out.println(names.get(i).toString());
                System.out.println();
            } else {
                System.out.println(names.get(i).toString() + "<br>");
            }

        }
    }
    
    static class Name {
        String first;
        String last;
        public Name(String first, String last) {
            this.first = first;
            this.last = last;
        }
        public String toString() {
            return first + " " + last;
        }
    }
    
    static class NameComparator implements Comparator<Name> {
        public int compare(Name n1, Name n2) {
            return n1.last.compareTo(n2.last);
        }
    }
    
}