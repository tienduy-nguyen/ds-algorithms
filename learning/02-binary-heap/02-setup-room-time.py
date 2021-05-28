# Dat phong, sap xep h hop
# https://www.youtube.com/watch?v=xslzPeyiJ8k
# Cty chi co 1 phong hop chung. Thiet ke mot chuong trinh Booking giup cac nhan vien co
# the dat hen phong hop nay. Hay bao loi neu 2 doi bat ky nao co gio hop giao nhau
# Khi chuong tring dung ham add(start_time, end_time), quy uoc gio hop se nam trong khoang mo
# bat dau <= x < gio ket thuc
# # vd: Booking()
# Booking.add(15, 40) return True
# Booking.add(30,45) return False
# Booking.add(40, 45) return True
# Booking.add(0,7) return True
# Booking.add(60,85) return True
# Booking.add(5,15) return True


class Node(object):
    def __init__(self, start, end):
        self.s = start
        self.e = end
        self.left = None
        self.right = None


class Booking:
    def __init__(self):
        self.root = Node(0, 0)

    def add(self, start, end):
        def recurse(startR, endR, node):  # search and add on binary tree
            if startR >= node.e:
                if not node.right:
                    node.right = Node(startR, endR)
                    return True
                return recurse(startR, endR, node.right)
            elif endR <= node.s:
                if not node.left:
                    node.left = Node(startR, endR)
                    return True
                return recurse(startR, endR, node.left)
            return False

        return recurse(start, end, self.root)
