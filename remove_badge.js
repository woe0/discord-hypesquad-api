fetch("https://discord.com/api/v9/hypesquad/online", {
  method: "DELETE",
  headers: {
    "Authorization": "YOUR_TOKEN_HERE",
    "Content-Type": "application/json"
  }
}).then(res => {
  if (res.status === 204) {
    console.log("تم مسح الشارة بنجاح");
  } else {
    console.log("خطأ: " + res.status);
  }
});
