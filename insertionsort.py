import random

def insertion_sort(lista):
    for p in range(0, len(lista)):
        atual = lista[p]

        while p > 0 and lista[p - 1] > atual:
            lista[p] = lista[p - 1]
            p -= 1

        lista[p] = atual

    return lista




random.seed(0)
listaDesor = [random.randint(0,20) for n in range(10)]
print("Lista desordenada")
print(listaDesor)
random.shuffle(listaDesor)

print("\nLista ordenada usando insertion sort")
print (insertion_sort(listaDesor)) 