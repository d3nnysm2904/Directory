from clases import Triangle
# Iheritance


class Coloredtriangle(Triangle):
    """ Triangle that has color"""

    def __init__(self, a, b, color):
        # get parent class [super()],class its __init__()
        super().__init__(a, b)

        self.color = color

    def describe(self):
        msg = super().describe()
        return msg + f"i am {self.color}"
