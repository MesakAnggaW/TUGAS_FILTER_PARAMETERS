function call(value) {
    let arr = [
        { Negara: "Indonesia", Benua: "Asia" },
        { Negara: "Jerman", Benua: "Eropa" },
        { Negara: "Spanyol", Benua: "Eropa" },
        { Negara: "Korea", Benua: "Asia" },
        { Negara: "Portugal", Benua: "Eropa" },
        { Negara: "USA", Benua: "Amerika" },
    ];

    let Area = arr.filter((x) => {
        return x.Benua == value
    })

    console.log(Area);
}

call("Asia");
call("Eropa");