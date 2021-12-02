document.getElementById("add").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("cancel_icon_btn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
})

document.getElementById("edit").addEventListener("click", function() {
    document.querySelector(".popup1").style.display = "flex";
})

document.getElementById("cancel_icon_btn1").addEventListener("click", function() {
    document.querySelector(".popup1").style.display = "none";
})

document.getElementById("delete").addEventListener("click", function() {
    document.querySelector(".popup2").style.display = "flex";
})

document.getElementById("cancel_icon_btn2").addEventListener("click", function() {
    document.querySelector(".popup2").style.display = "none";
})

document.getElementById("cancel_icon_btn3").addEventListener("click", function() {
    document.querySelector(".popup2").style.display = "none";
})

const showHeader = (headers) => {
    const headerData = headers;
    const tableref = document.getElementById("main_table");
    let tableHeader = "<tr>";
    headerData.forEach(element => {
        tableHeader += "<th>" + element + "</th>";
    });
    tableHeader += "</tr>";
    tableref.innerHTML += tableHeader;
}

const showOnLoad = (data) => {
    // console.log(data)
    // console.log(data[0])
    //     //Object.keys()
    // console.log(Object.keys(data[0]))

    //Foreach and Map


    showHeader(Object.keys(data[0]).map((headerString) => headerString.toUpperCase()));
    const tableData = data;
    const tableref = document.getElementById("main_table");
    tableData.forEach(tableRow => {
        let tableEle = "<tr>";
        Object.entries(tableRow).forEach(tableRowEle => {
            const [key, value] = tableRowEle;
            tableEle += "<td>" + value + "</td>";
        });
        tableEle += "</tr>";
        tableref.innerHTML += tableEle;
    })
}

const fetchTableData = () => {
    fetch('http://localhost:8080/Testing/fetch')
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            showOnLoad(jsonResponse)
        })
        .catch(error => {
            console.log(error)
        })
}

//Initial Loading
(
    function() {
        fetchTableData()
    }
)()

const add = () => {
    const cust_name = document.getElementById("t11").value;
    const cust_number = document.getElementById("t12").value;
    const invoice_no = document.getElementById('t13').value;
    const invoice_amt = document.getElementById('t14').value;
    const due_date = document.getElementById('t15').value;
    const notes = document.getElementById('t16').value;
    fetch(`http://localhost:8080/Testing/fetch/add?cust_name=${cust_name}&cust_number=${cust_number}&invoice_id=${invoice_id}&invoice_amt=${invoice_amt}&due_in_date=${due_in_date}`, {
            method = "POST"
        }).then(() => {
            fetchTableData()
        })
        .then((message) => {
            alert(message[0].executionMessage)
        })
}