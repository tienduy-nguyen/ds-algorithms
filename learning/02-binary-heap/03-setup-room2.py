# https://www.youtube.com/watch?v=YvpOIQq982s

# Cty chi co 2 phong hop chung. Thiet ke mot chuong trinh Booking giup cac nhan vien co
# the dat hen phong hop nay. Hay bao loi neu 2 doi bat ky nao co gio hop giao nhau
# Khi chuong tring dung ham add(start_time, end_time), quy uoc gio hop se nam trong khoang mo
# bat dau <= x < gio ket thuc

# # vd: BookingTwo()
# Booking.add(30, 40) return True
# Booking.add(70, 90) return True
# Booking.add(15, 35) return True
# Booking.add(10,33) return False
# Booking.add(0, 20) return True
# Booking.add(35,50) return True
# Booking.add(36,42) return False


class BookingTwo:
    def __init__(self):
        self.book = []
        self.overlap = []

    def add(self, start, end):
        for s, e in self.overlap:
            if start < e and end > s:
                return False
        for s, e in self.book:
            if start < e and end > s:
                self.overlap.append((max(start, s), min(end, e)))
        self.book.append((start, end))
        return True
