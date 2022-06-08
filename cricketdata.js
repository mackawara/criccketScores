async function fetchFromOffset(offset) {
    return await fetch("https://api.cricapi.com/v1/countries?apikey=fda567cb-12e7-43aa-9e1b-814290ff500b&offset=" + offset)
        .then(data => data.json())
        .then(data => {
            if (data.status != "success") { alert("Failed"); return; }
            let datarray = data.data;
            if (!datarray)
                return [];
            else if (offset >= data.info.totalRows)
                return datarray;
            else
                return fetchFromOffset(offset + 25)
                    .then(function (data) {
                        return datarray.concat(data);
                    });
        })
        .catch(e => console.log);
}
module.exports=fetchFromOffset