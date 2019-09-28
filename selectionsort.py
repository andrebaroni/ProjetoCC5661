import sys, random

def selection_sort(lista):
    for i in range(0, len(lista)): 
        min = i 
        for j in range(i+1, len(lista)): 
            if lista[min] > lista[j]: 
                min = j 
                
        aux = lista[i]
        lista[i] = lista[min]
        lista[min] = aux 

    return lista
    
    

random.seed(0)
listaDesor = [random.randint(0,20) for n in range(10)]
print("Lista desordenada")
print(listaDesor)
random.shuffle(listaDesor)

print("\nLista ordenada usando selection sort")
print (selection_sort(listaDesor)) 