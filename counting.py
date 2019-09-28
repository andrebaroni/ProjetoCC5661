import random, math
 
def counting_sort(tlist, k, size):
    count_list = [0]*(k)
 
    for n in tlist:
        count_list[n] = count_list[n] + 1
 
    for n in range(len(count_list)-1, 0, -1):
        while count_list[n] > 0:
            tlist[size-1] = n
            size-=1
            count_list[n] -= 1
 

# Criar uma array random
random.seed(0)
listaDesor = [random.randint(0,20) for n in range(10)]
print("Lista desordenada")
print(listaDesor)
 
## Fazer o counting sort.
print("\nLista ordenada usando counting sort estável")
counting_sort(listaDesor, max(listaDesor)+1, len(listaDesor))
print(listaDesor)


#outro jeito
'''def countingSort(lista, exp1): 
  
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
'''