function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

fibonacci();

//Gdy uruchamiasz w samym Barckets wpisz w nawiasach funkcji (tutaj) wartość by w konsoli uzyskać wynik (dla danego numerem wyrazu ciągu)

//potrzebne są do doinstalowania dwa dodatki: 1 >> Console Plus i 2 >> Run Script << zaznaczasz kod których chcesz sprawdzić i w prwym klawiszu myszki "Run Script as JS" lub inny "Run Script as Python" itd.