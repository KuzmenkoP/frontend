    function MyConst(){
        this.aaa = 10;
        this.bbb = 20;
    }

    MyConst.prototype.funcNormal = function(){document.write("Normal")};

    let obj1 = new MyConst();
    obj1.funcNormal();

    function Constr(){
        this.a = 10;
        prototype.funcNew = () => {document.write("New")};
    }

    let obj2 = new Constr();
    obj2.funcNew();