// constructor function để khởi tạo các đối tượng CD
function CD(cdCode, cdTitle, singer, songNumber, price) {
  this.code = cdCode;
  this.title = cdTitle;
  this.singer = singer;
  this.songNumber = songNumber;
  this.price = price;
}

// đối tượng lưu danh sách các CD
const cdManager = function (maxLength) {
  const cdList = [];

  return {
    addNewCD(cdCode, cdTitle, singer, songNumber, price) {
      if (cdList.length === maxLength) {
        console.log('Bộ sưu tập CD đã đầy');
        return;
      }
      if (cdList.length >= 1) {
        if (cdList.some((item) => item.code === cdCode)) {
          console.log(`Trùng mã với CD đã có trong danh sách, mã CD: ${cdCode}`);
          return;
        }
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
        let newCD = new CD(cdCode, cdTitle, singer, songNumber, Number.parseFloat(price));
        cdList.push(newCD);
        console.log(`Thêm CD mới thành công, mã CD: ${newCD.code}, tựa CD: ${newCD.title}`);
      } else {
        console.log('Thông số CD không thoả mãn', { cdCode, cdTitle, singer, songNumber, price });
      }
    },
    totalCD() {
      let cdLength = cdList.length;
      console.log('Số lượng CD có trong danh sách:', cdLength);
      return cdLength;
    },
    totalPrice() {
      let totalPrice = cdList.reduce((total, currentValue) => {
        return total + currentValue.price;
      }, 0);
      console.log('Tổng giá thành của các CD', totalPrice);
      return totalPrice;
    },
    sortByPrice() {
      cdList.sort((a, b) => b.price - a.price);
      console.log('Danh sách giảm dần theo giá thành:', cdList);
    },
    sortByName() {
      cdList.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        return 0;
      });
      console.log('danh sách tăng dần theo tựa CD', cdList);
    },
    exportList() {
      // console.log('Danh sách CD:',this.cdList);
      console.table(this.cdList);
      return cdList;
    },
  };
};
const cdCollection = cdManager(2);
// Thêm CD hợp lệ

cdCollection.addNewCD(1, 'Cưới Thôi', 'Masew', 2, 10000);
cdCollection.addNewCD(2, 'Thức Giấc', 'Da LAB', 4, 20000.6);
cdCollection.addNewCD(3, 'Có hẹn với thanh xuân', 'MONSTAR', 7, 30000.0);
cdCollection.addNewCD(4, 'Ngày đầu tiên', 'Đức Phúc', 2, 60000.65);
cdCollection.addNewCD(5, 'Ái nộ', 'Masew', 2, 50000.0);

// Thêm CD lỗi
cdCollection.addNewCD(1, 'Cưới Thôi', 'Masew', 3, 10000.0); // Trùng mã CD
cdCollection.addNewCD(6, true, { singer: 'Hiền Hồ' }, 3, 10000.0); // Sai kiểu dữ liệu tựa CD, Ca Sĩ
cdCollection.addNewCD(7, true, 'Cưới Thôi', 'Masew', '3', '4'); // Sai kiểu dữ liệu số bài hát, giá thành

//xuất toàn bộ danh sách
cdCollection.exportList();

//Tính số lượng CD có trong danh sách.
cdCollection.totalCD();

//Tình tổng giá thành của các CD.
cdCollection.totalPrice();

//sắp xếp danh sách giảm dần theo giá thành.
cdCollection.sortByPrice();

//sắp xếp danh sách tăng dần theo tựa CD, sắp xếp theo thứ tự a -> z
cdCollection.sortByName();
