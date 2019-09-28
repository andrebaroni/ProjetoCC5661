import random

def merge(llist, rlist):
        """
        Merge two lists into an ordered list.
        """
        final = []
        while llist or rlist:
                if len(llist) and len(rlist):
                        if llist[0] < rlist[0]:
                                final.append(llist.pop(0))
                        else:
                                final.append(rlist.pop(0))

                if not len(llist):
                                if len(rlist): final.append(rlist.pop(0))

                if not len(rlist):
                                if len(llist): final.append(llist.pop(0))

        return final

def merge_sort(list):
        """
        Sort the list passed by argument with merge.
        """
        if len(list) < 2: return list
        mid = len(list) / 2
        
        return merge(merge_sort(list[:int(mid)]), merge_sort(list[int(mid):]))



random.seed(0)
listaDesor = [random.randint(0,20) for n in range(10)]
print("Lista desordenada")
print(listaDesor)
random.shuffle(listaDesor)

print("\nLista ordenada usando mergesort")
print (merge_sort(listaDesor)) 