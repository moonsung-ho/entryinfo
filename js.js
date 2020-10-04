const name = prompt("사용자이름을 입력하세요")
fetch(`https://playentry.org/api/getUserByUsername/${name}`)
.then(res => res.json())
.then(o => {
message = o.description.split(/[-:T]/)
alert(`상태메시지는 "${message}" 입니다.`)
})