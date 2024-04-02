# Create a Node class to build nodes
class Node:
    def __init__(self, value):              # def __init__(self, value) is how you build a constructor in Python
        self.value = value                  # set the constructed node's value to the value passed into value 
        self.next = None                    # set the newly constructed node's next pointer to None (None is null)

# Create a LinkedList class to build linked lists    
class LinkedList:
    def __init__(self, value):              # DEFINE list constructor
        new_node = Node(value)              # CREATE a new node 
        self.head = new_node                # set head pointer to new node
        self.tail = new_node                # set tail pointer to new node
        self.length = 1                     # set length of the linked list to 1


    def print_list(self):                   # DEFINE print list method to print list to console
        temp = self.head                    # create temp variable to hold values it visits, starting at head
        while temp is not None:             # initiate a while loop temp variable to visit all nodes it finds
            print(temp.value)                   # print the value of the node temp is currently visiting
            temp = temp.next                    # after printing, move temp to next node via next pointer


    def append(self, value):                # DEFINE append method to add node to end of list
        new_node = Node(value)              # CREATE a new node
        if self.length == 0:                # EDGE CASE IF the list is empty set head and tail to created node
            self.head = new_node                # set head pointer to new node
            self.tail = new_node                # set tail pointer to new node
        else:                               # ELSE
            self.tail.next = new_node           # set tail.next (currently representing the last node in list) to new node
            self.tail = new_node                # set tail to new node
        self.length += 1                    # INCREMENT list length property


    def prepend(self, value):               # DEFINE prepend method to add new node to beginning of list
        new_node = Node(value)              # CREATE new node
        if self.length == 0:                # EDGE CASE if the list is empty, if it is
            self.head = new_node                # set head to new node
            self.tail = new_node                # set tail to new node
        else:
            new_node.next = self.head           # set new node next pointer to current head of list
            self.head = new_node                # set head of list to new node
        self.length += 1                    # INCREMENT list length property


    def pop_first(self):                    # DEFINE pop_first method that removes item at beginning of list
        if self.length == 0:
            return None
        temp = self.head
        self.head = self.head.next
        temp.next = None
        self.length -= 1
        if self.length == 0:
            self.tail = None
        return temp
        

    def pop(self):                          # DEFINE pop method to remove the last node from this list and return it
        if self.length == 0:                # EDGE CASE list is empty, then there's nothing to return
            return None                         # return None
        temp = self.head                    # CREATE a temp pointer to traverse the list
        pre = self.head                     # CREATE a pre pointer to follow the temp pointer, trailing 1 behind
        while temp.next is not None:        # initiate a while loop, looking at temp.next during each iteration
            pre = temp                          # set pre to temp
            temp = temp.next                    # set temp to next node until it encounters None, then it is at last node
        self.tail = pre                     # pre is always 1 behind next, so it will be 1 node back from the end, set tail to this node
        self.tail.next = None               # set tail.next to None which breaks link to last node
        self.length -= 1                    # decrement list length property
        if self.length == 0:                # EDGE CASE list is empty after pop runs
            self.head = None                    # set head to none
            self.tail = None                    # set tail to none
        return temp                         # RETURN last node
        

    def get(self, index):                           # DEFINE get method to return a specific node
        if index < 0 or index > self.length:        # TEST that a valid index is passed in
            return None                                 # if index doesn't exist, return None
        temp = self.head                            # CREATE temp pointer to traverse list
        for _ in range(index):                      # initiate for loop to move head <index> number of times through list
            temp = temp.next                            # set temp to next node
        return temp                                 # RETURN the node that temp stops at after foor loop


    def set_value(self, index, value):      # DEFINE set value method to set a node to a different value
        temp = self.get(index)
        if temp is not None:
            temp.value = value
            return True
        return False
    

    def insert(self, index, value):                 # DEFINE insert method to insert a node at some point in the list
        if index < 0 or index > self.length:
            return False


## Build and execute 
        
my_linked_list = LinkedList(11)
my_linked_list.append(3)
my_linked_list.append(23)
my_linked_list.append(7)
my_linked_list.set_value(1, 4)
my_linked_list.print_list()