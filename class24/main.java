public class main_2 {
       
       // Tu programa comienza con una llamada a main().
       // Imprime "Hola Mundo" a la ventana de la terminal.
       public static void main(String args[]) {
        boolean isACorner(int j, int i, int n)
        {
            return (j == 1 || j == n) && (i == 1 || i == n);
           }
        
        boolean isInside(int j, int i, int n) {
            return (j > 1 && j < n) && (i > 1 && i < n);
           }

           int n = 4;
           int N = n + 2;
       
           for (int i = 1; i <= N; i++)
       
               String row = "";
       
               for (int j = 1; j <= N; j++)
       
                   boolean isAC = isACorner(int i, int j, int N);
       
                   if (isAC)
                       row += " ";
                   else if 
                       boolean isI = isInside(int i, int j, int N);
                       
                       row += isI ? " " : "*";
                   
               
       
               System.out.println(row);
           
       }
}