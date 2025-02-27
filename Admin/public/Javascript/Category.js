"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
let Data_View_Category = null;
class Loadding_API_Category {
    constructor() {
        this.View_Category = (API) => __awaiter(this, void 0, void 0, function* () {
            if (!API)
                return null;
            try {
                let Connect = yield axios.get(API);
                if (Connect.status === 200 && Connect.statusText == 'OK') {
                    Data_View_Category = Connect.data;
                    let Form_Views = (document.querySelector("#productList"));
                    let Index_Category = 1;
                    Connect.data.forEach(element => {
                        Form_Views.innerHTML += `
                        <tr>
                            <td>${Index_Category}</td>
                            <td>${element['Name']}</td>
                            <td><i value_Category=${Index_Category}  onclick="View_Upload_Category(this)" class="bi bi-pencil-square"></i></td>
                            <td><i onclick="Delete_Category(${element['ID']})" class="bi bi-x-lg"></i></td>
                        </tr>
                    `;
                        Index_Category++;
                    });
                }
            }
            catch (error) {
                console.log('Kết nối thất bại' + error);
            }
        });
        this.View_Select_Category = (API) => __awaiter(this, void 0, void 0, function* () {
            if (!API)
                return null;
            try {
                let Connect = yield axios.get(API);
                if (Connect.status === 200 && Connect.statusText == 'OK') {
                    let Form_Add = (document.querySelector(".Page_Category"));
                    Connect.data.forEach(elements => {
                        Form_Add.innerHTML += `
                        <option value="${elements['ID']}">${elements['Name']}</option>
                    `;
                    });
                }
            }
            catch (error) {
                console.log('Kết danh mục  thất bại' + error);
            }
        });
    }
}
// Thêm danh mục
let Trangthaichinhsưa = 'Views';
(_a = document.querySelector(".Check_Form_Products")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (Event) => {
    var _a, _b, _c, _d, _e;
    Event.preventDefault();
    // Thêm mới sản phẩm
    if (Trangthaichinhsưa === 'Views') {
        let ID_Category = (_a = document.querySelector(".Page_Category")) === null || _a === void 0 ? void 0 : _a.value.trim();
        let Name_Category = (_b = document.querySelector(".ProductInput")) === null || _b === void 0 ? void 0 : _b.value.trim();
        if (ID_Category && Name_Category) {
            fetch('/Category/Add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ID_Category: ID_Category,
                    Name_Category: Name_Category,
                })
            })
                .then(response => response.text())
                .then(data => {
                alert("Thành Công" + data);
                window.location.href = '/Category';
            })
                .catch(error => {
                console.error('Error:', error);
            });
        }
        else {
            alert("Vui Lòng Nhập đủ Form");
        }
    }
    // Sửa sản phẩm
    else {
        let ID_Category = (_c = document.querySelector(".Page_Category")) === null || _c === void 0 ? void 0 : _c.value.trim();
        let Name_Category = (_d = document.querySelector(".ProductInput")) === null || _d === void 0 ? void 0 : _d.value.trim();
        let ID_Edit = (_e = document.querySelector(".ID_UPLOAD")) === null || _e === void 0 ? void 0 : _e.value.trim();
        if (ID_Category && Name_Category) {
            fetch('/Category/Upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ID_Category: ID_Category,
                    Name_Category: Name_Category,
                    ID_Edit: ID_Edit
                })
            })
                .then(response => response.text())
                .then(data => {
                alert("Thành Công" + data);
                window.location.href = '/Category';
            })
                .catch(error => {
                console.error('Error:', error);
            });
        }
        else {
            alert("Vui Lòng Nhập đủ Form  sửa");
        }
    }
});
// View Edit 
let View_Upload_Category = (Event) => {
    Trangthaichinhsưa = 'Capnhat';
    // Dom 
    let Index_Edit = Event.getAttribute("value_Category");
    let Tile_Submit = document.querySelector("#Title_Submit");
    let Name = document.querySelector(".ProductInput");
    let Name_Category = document.querySelector("#View_Default");
    let ID_Edit = document.querySelector(".ID_UPLOAD");
    Tile_Submit.innerHTML = 'Cập Nhật Danh Mục';
    Name.value = Data_View_Category[Index_Edit - 1]['Name'];
    Name_Category.value = Data_View_Category[Index_Edit - 1]['ID_Danhmuc'];
    Name_Category.innerHTML = Data_View_Category[Index_Edit - 1]['Name_Danhmuc'];
    ID_Edit.value = Data_View_Category[Index_Edit - 1]['ID'];
    console.log(Data_View_Category[Index_Edit - 1]);
};
// Xóa danh mục
let Delete_Category = (ID_Delete) => {
    if (ID_Delete) {
        fetch(`/Category/${ID_Delete}`, {
            method: 'DELETE'
        })
            .then(response => response.text())
            .then(data => {
            alert('Xóa Danh Mục Thành Công');
            window.location.href = '/Category';
        })
            .catch(error => console.error('Lỗi:', error));
    }
};
let Loaddings = new Loadding_API_Category();
Loaddings.View_Category('http://localhost:4000/Category/API_Views');
Loaddings.View_Select_Category('http://localhost:4000/Category/API_Category');
