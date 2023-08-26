export const init = async (input) => {
  try{
    const response = await(await fetch(`${API_URL}/api/${API_KEY}/I2790/json/1/1000/DESC_KOR=${input}`)).json();
    console.log(response);
    response.I2790.row.forEach((item) => {
      if(item.DESC_KOR === input){
        console.log(item);
        create(item)
        flag = true;
      }
      if(flag){
        return;
      }
    });
    if(!flag){
      console.log(response.I2790.row[0]); 
    }
  } catch (e) {
    console.log("데이터가 없습니다")
  }
};