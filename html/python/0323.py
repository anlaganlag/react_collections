

class Parent(object):
    def foo(self):
        print("Parent")

class Child(Parent):
    def foo(self):
        print("Child b4")
        super().foo()
        print("Child,after")

dad = Parent()
son = Child()

son.foo()