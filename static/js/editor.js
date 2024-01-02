//Lấy lại các thành phần
const executeCodeBtn = document.querySelector('.btn-run');

//Thiết lập Ace
let codeEditor = ace.edit("editorCode")

let editorlib = {
    init(){
        //Cấu hình Ace

        //Nền
        codeEditor.setTheme("ace/theme/dracula");

        //Thiết lập ngôn ngữ
        codeEditor.session.setMode("ace/mode/javascript");

        //Thiết lập cài đặt
        codeEditor.setOptions({
            autoScrollEditorIntoView: true,
            copyWithEmptySelection: true,
            //fontFamily: 'Arial',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

    }
}

//Sự kiện
executeCodeBtn.addEventListener('click', () => {
    //Nhận đầu vào từ code editor
    const userCode = codeEditor.getValue();

    //Chạy lệnh người dùng
    try{
        console.log(new Function(userCode)());
    } catch(err){
        console.error(err);
    }
});

editorlib.init();