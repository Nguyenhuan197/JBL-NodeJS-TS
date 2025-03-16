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
var _a, _b;
class Loadding_API {
    constructor() {
        this.Connect_API = (API) => __awaiter(this, void 0, void 0, function* () {
            if (API) {
                try {
                    let Connect = yield axios.get(API);
                    if (Connect.status === 200 && Connect.statusText == 'OK') {
                        View_Product_API(Connect.data);
                    }
                }
                catch (error) {
                    console.log('Kết nối thất bại' + error);
                }
            }
        });
    }
}
let Coppy_Data;
const View_Product_API = (Data) => {
    Coppy_Data = Data.Data_Product;
    let Dom = document.querySelector("#productList");
    let Index = 1;
    let Trangthai;
    console.log(Coppy_Data);
    Data.Data_Product.forEach(element => {
        let Trangthaisp = element['Trangthaisp'] == 1 ? 'Chưa Duyêt' : 'Đã Duyêt';
        Dom === null || Dom === void 0 ? void 0 : Dom.innerHTML += `
            <tr>
                <th>${Index}</th>
                <th>${element['Name']}</th>
                <th>${element['Price']}</th>
                <th>${element['Category']}</th>
                <th>${element['ID']}</th>
                <th><img src="${element['IMG']}" alt=""></th>
                <th>
                    <select name="" class="mySelect" onchange="Trangthaisanpham (${element['ID']})">
                        <option value="${element['Trangthaisp']}">${Trangthaisp}</option>
                        <option value="1">Chưa Duyệt</option>
                        <option value="2">Đã Duyệt</option>
                    </select><br><br>

                </th>
                <th><i onclick="View_Upload(this)" Value_Index = "${Index - 1}" Value="${element['ID']}" class="bi bi-pencil-square"></i></th>
                <th><i onclick="Delete(this)" Value="${element['ID']}" class="bi bi-x-lg"></i></th>
            </tr>
        `;
        Index++;
        Trangthaisp = '';
    });
};
const Trangthaisanpham = (Element) => {
    let Status_Product = document.querySelector(".mySelect").value;
    let ID_Edit_Status = Element;
    fetch('/Product/EDIT_Quen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Status_Product: Status_Product,
            ID_Edit_Status: ID_Edit_Status
        })
    })
        .then(response => response.text())
        .then(data => {
        alert('Cập Nhật Thành Công');
        window.location.href = '/Product';
    })
        .catch(error => {
        console.error('Error:', error);
    });
};
let Delete = (Event) => {
    let ID_DELETE = Event.getAttribute("value");
    if (ID_DELETE) {
        fetch(`http://localhost:4000/Product/${ID_DELETE}`, {
            method: 'DELETE'
        })
            .then(response => response.text())
            .then(data => {
            alert('Xóa Thành Công');
            window.location.href = '/Product';
        })
            .catch(error => console.error('Lỗi:', error));
    }
};
let Display_Adds = (document.querySelector("#Add_Product"));
let Display_Edits = (document.querySelector("#Edit_Product"));
let View_Upload = (Event) => {
    Connect_Cookia.Push_Cookia('Edit');
    let Index = Event.getAttribute("Value_Index");
    let Data_Upload = Coppy_Data[Index];
    let ID_Upload = (document.querySelector('.ID_Upload'));
    let Name_Upload = (document.querySelector('.Name_Upload'));
    let Price_Upload = (document.querySelector('.Price_Upload'));
    ID_Upload.value = Data_Upload['ID'];
    Name_Upload.value = Data_Upload['Name'];
    Price_Upload.value = Data_Upload['Price'];
    Display_Adds.style.display = 'none';
    Display_Edits.style.display = 'block';
};
// Cookia Dom
class Check_Cookia {
    constructor() {
        this.GET_Cookia = (Key_Cookia) => {
            var _a;
            let cookieValue = ((_a = document.cookie.split('; ')
                .find(row => row.startsWith(Key_Cookia + '='))) === null || _a === void 0 ? void 0 : _a.split('=')[1]) || "";
            return cookieValue;
        };
        this.Push_Cookia = (Views) => {
            let date = new Date();
            date.setTime(date.getTime() + (3 * 1000));
            document.cookie = 'Router_View_Product=' + Views + '; expires=' + date.toUTCString() + '; path=/';
        };
        this.Display_Products = (Event) => {
            if (Event == 'Edit') {
                Display_Adds.style.display = 'none';
                Display_Edits.style.display = 'block';
            }
            else {
                Display_Adds.style.display = 'block';
                Display_Edits.style.display = 'none';
            }
        };
    }
}
let Connect_Cookia = new Check_Cookia();
window.onload = () => {
    let Views = Connect_Cookia.GET_Cookia('Router_View_Product');
    Connect_Cookia.Display_Products(Views);
};
// Edỉt - Upload
(_a = document.getElementById("Upload_Product")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        e.preventDefault();
        let formData = new FormData();
        let fileInput = document.getElementById("IMG_News");
        let ID = (_a = document.querySelector(".ID_Upload")) === null || _a === void 0 ? void 0 : _a.value.trim();
        let Name = (_b = document.querySelector(".Name_Upload")) === null || _b === void 0 ? void 0 : _b.value.trim();
        let Price = (_c = document.querySelector(".Price_Upload")) === null || _c === void 0 ? void 0 : _c.value.trim();
        if (!((_d = fileInput.files) === null || _d === void 0 ? void 0 : _d.length)) {
            alert("Vui lòng chọn ảnh trước khi tải lên!");
            return;
        }
        if (!Name || !Price) {
            alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
            return;
        }
        // Thêm dữ liệu vào FormData
        formData.append("ID", ID);
        formData.append("image", fileInput.files[0]);
        formData.append("Name", Name);
        formData.append("Price", Price);
        try {
            let uploadResponse = yield fetch("/Product/Upload", {
                method: "POST",
                body: formData
            });
            window.location.href = '/Product';
        }
        catch (error) {
            console.error("Lỗi:", error);
            alert(error.message);
        }
    });
});
// ADD Product
(_b = document.getElementById("Add_Product")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        e.preventDefault();
        let formData = new FormData();
        let fileInput = document.getElementById("IMG_ADD");
        let Name = (_a = document.querySelector(".Name_Add")) === null || _a === void 0 ? void 0 : _a.value.trim();
        let Price = Number((_b = document.querySelector(".Price_Add")) === null || _b === void 0 ? void 0 : _b.value.trim());
        let Category = Number((_c = document.querySelector('#Category_ADD')) === null || _c === void 0 ? void 0 : _c.value.trim());
        if (!((_d = fileInput.files) === null || _d === void 0 ? void 0 : _d.length)) {
            alert("Vui lòng chọn ảnh trước khi tải lên!");
            return;
        }
        if (!Name || !Price) {
            alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
            return;
        }
        // Thêm dữ liệu vào FormData
        formData.append("image", fileInput.files[0]);
        formData.append("Name", Name);
        formData.append("Price", Price);
        formData.append("Category", Category);
        try {
            let uploadResponse = yield fetch("/Product/Add", {
                method: "POST",
                body: formData
            });
            window.location.href = '/Product';
        }
        catch (error) {
            console.error("Lỗi:", error);
            alert(error.message);
        }
    });
});
let API = window.location.href;
const Loadding = new Loadding_API();
Loadding.Connect_API('http://localhost:4000/Product/API');
