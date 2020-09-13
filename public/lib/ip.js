sessionStorage.setItem('userIP', JSON.stringify(returnCitySN.cip));
let city = ['北京', '天津', '上海', '重庆', '河北', '山西', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '海南', '四川', '贵州', '云南', '陕西', '甘肃', '青海', '内蒙古', '广西', '西藏', '宁夏', '新疆', '香港', '澳门', '台湾'];
// 0国外，1国内
let flag = 0;
city.forEach(item => {
  if (returnCitySN.cname.indexOf(item) !== -1) {
    flag = 1; return false;
  };
});
sessionStorage.setItem('address', flag);
