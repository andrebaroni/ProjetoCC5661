import random, math
 
def basic_counting_sort(tlist, k, size):
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
basic_counting_sort(listaDesor, max(listaDesor)+1, len(listaDesor))
print(listaDesor)