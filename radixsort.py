import random

def countingSort(lista, exp1): 
  
    n = len(lista) 
  
    output = [0] * (n) 
  
    count = [0] * (10) 
  
    for i in range(0, n): 
        index = (lista[i]/exp1) 
        count[ int((index)%10) ] += 1
  
    for i in range(1,10): 
        count[i] += count[i-1] 
  
    i = n-1
    while i>=0: 
        index = (lista[i]/exp1) 
        output[ count[ int((index)%10) ] - 1] = lista[i] 
        count[ int((index)%10) ] -= 1
        i -= 1
  
    i = 0
    for i in range(0,len(lista)): 
        lista[i] = output[i] 


    return lista


  
def radixSort(lista): 
  
    max1 = max(lista) 
  
    exp = 1
    while max1/exp > 0: 
        countingSort(lista,exp) 
        exp *= 10

    return lista


random.seed(0)
listaDesor = [random.randint(0,20) for n in range(10)]
print("Lista desordenada")
print(listaDesor)
random.shuffle(listaDesor)

print("\nLista ordenada usando insertion sort")
print (radixSort(listaDesor)) 