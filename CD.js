// constructor function để khởi tạo các đối tượng CD
function CD(cdCode, cdTitle, singer, songNumber, price) {
  this.code = cdCode;
  this.title = cdTitle;
  this.singer = singer;
  this.songNumber = songNumber;
  this.price = price;
}

// đối tượng lưu danh sách các CD
const cdManager = {
  cdList: [],
  addNewCD(cdCode, cdTitle, singer, songNumber, price) {
    function isFloat(n) {
      return Number(n) === n && n % 1 !== 0;
    }
    if (
      Number.isInteger(cdCode) &&
      typeof cdTitle === 'string' &&
      typeof singer === 'string' &&
      Number.isInteger(songNumber) &&
      songNumber > 0 &&
      typeof price === 'number' &&
      price > 0
    ) {
      if (this.cdList.some((item) => item.code === cdCode)) {
        console.log(`Trùng mã với CD đã có trong danh sách, mã CD: ${cdCode}`);
      } else {
        let newCD = new CD(cdCode, cdTitle, singer, songNumber, Number.parseFloat(price));
        this.cdList.push(newCD);
        console.log(`Thêm CD mới thành công, mã CD: ${newCD.code}, tựa CD: ${newCD.title}`);
      }
    } else {
      console.log('Thông số CD không thoả mãn', { cdCode, cdTitle, singer, songNumber, price });
    }
  },
  totalCD() {
    console.log('Số lượng CD có trong danh sách:', this.cdList.length);
  },
  totalPrice() {
    let totalPrice = this.cdList.reduce((total, currentValue) => {
      return total + currentValue.price;
    }, 0);
    console.log('Tổng giá thành của các CD', totalPrice);
  },
  sortByPrice() {
    let newList = [...this.cdList];
    newList.sort((a, b) => b.price - a.price);
    console.log('Danh sách giảm dần theo giá thành:', newList);
  },
  sortByName() {
    let newList = [...this.cdList];
    newList.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });

    console.log('danh sách tăng dần theo tựa CD', newList);
  },
  exportList() {
    // console.log('Danh sách CD:',this.cdList);
    console.table(this.cdList);
  },
};
// Thêm CD hợp lệ
cdManager.addNewCD(1, 'Cưới Thôi', 'Masew', 2, 10000);
cdManager.addNewCD(2, 'Thức Giấc', 'Da LAB', 4, 20000.6);
cdManager.addNewCD(3, 'Có hẹn với thanh xuân', 'MONSTAR', 7, 30000.0);
cdManager.addNewCD(4, 'Ngày đầu tiên', 'Đức Phúc', 2, 60000.65);
cdManager.addNewCD(5, 'Ái nộ', 'Masew', 2, 50000.0);

// Thêm CD lỗi
cdManager.addNewCD(1, 'Cưới Thôi', 'Masew', 3, 10000.0); // Trùng mã CD
cdManager.addNewCD(6, true, { singer: 'Hiền Hồ' }, 3, 10000.0); // Sai kiểu dữ liệu tựa CD, Ca Sĩ
cdManager.addNewCD(7, true, 'Cưới Thôi', 'Masew', '3', '4'); // Sai kiểu dữ liệu số bài hát, giá thành

//xuất toàn bộ danh sách
cdManager.exportList();

//Tính số lượng CD có trong danh sách.
cdManager.totalCD();

//Tình tổng giá thành của các CD.
cdManager.totalPrice();

//sắp xếp danh sách giảm dần theo giá thành.
cdManager.sortByPrice();

//sắp xếp danh sách tăng dần theo tựa CD, sắp xếp theo thứ tự a -> z
cdManager.sortByName();
