fetch("https://discord.com/api/v9/hypesquad/online", {
  method: "POST",
  headers: {
    "Authorization": "YOUR_TOKEN_HERE",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ house_id: 1 }) 
}).then(res => {
  if (res.status === 204) {
    console.log("تمت إضافة الشارة بنجاح");
  } else {
    console.log("خطأ: " + res.status);
  }
});
