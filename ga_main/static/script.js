
document.addEventListener("DOMContentLoaded", function () {
    const typingIndicator = document.getElementById('typing-indicator');
    const userInput = document.getElementById("user-input")
    const languageSelect = document.getElementById("language-select")
    const sendButton = document.getElementById("send-button")
    const chatLog = document.getElementById("chat-log");
    // فهد كود 
    const userInputField = document.getElementById('user-input');
    


//     sendButton.addEventListener("click", sendMessage);
// function sendMessage() {
//     const message = userInput.value.trim();
//     if (message === "") return;
//     const language = languageSelect.value;
//     appendMessage("User: " + message);

//     fetch('/backend', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             message: message,
//             language: language
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         const botResponse = data.message;
//         appendMessage("Legal Researcher: " + botResponse);
//     });

//     userInput.value = "";
// }
    
    // فهد كود 
    sendButton.addEventListener('click', function() {
        const userInputs = userInputField.value;
        const selectedLanguage = languageSelect.value;
        
        fetch('/backend', {
            method: 'POST',
            body: JSON.stringify({ message: userInputs, language: selectedLanguage }),
            headers: { 'Content-Type': 'application/json' } })
            
        .then(response => response.json())
        .then(data => {
            chatLog.innerHTML += `<div class="user-message">User: ${userInputs}</div>`; // عرض رسالة المستخدم
            chatLog.innerHTML += `<div class="response"> Legal Researcher:`; // بداية رسالة الرد
            typingIndicator.style.display = "block"; // عرض مؤشر الكتابة
            // استخدم الدالة المذكورة أعلاه لعرض الرد حرفًا حرفًا
            typeMessage(data.message);

            chatLog.innerHTML += `</div>`; // نهاية رسالة الرد
            userInput.value = "";
        });
    });

    function typeMessage(message) {
        let index = 0;
        function typeCharacter() {
            if (index < message.length) {
                chatLog.innerHTML += message[index];
                index++;
                setTimeout(typeCharacter, 50); // هنا يمكنك تعديل سرعة الكتابة بتعديل القيمة 50
            } 
            else { typingIndicator.style.display = "none"; } 
        } 
        typeCharacter(); 
        }


    function appendMessage(message) {
        const messageElement = document.createElement("p");
        messageElement.innerText = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to bottom
    }

document.getElementById("suggested-phrases").addEventListener("click", function (event) {
    if (event.target.classList.contains("suggested-phrase")) {
        userInput.value = event.target.textContent;
        sendMessage();
    }
    
});
document.getElementById("suggested-phrases1").addEventListener("click", function (event) {
    if (event.target.classList.contains("suggested-phrase")) {
        userInput.value = event.target.textContent;
        sendMessage();
    }
    
});
document.getElementById("suggested-phrases2").addEventListener("click", function (event) {
    if (event.target.classList.contains("suggested-phrase")) {
        userInput.value = event.target.textContent;
        sendMessage();
    }
    
});

document.getElementById("ar").addEventListener("click", function (event) {
          
    document.getElementById("ar").hidden = true;
    document.getElementById("en").hidden = false;
 
    document.getElementById("header1").style.paddingLeft = "40px";
    document.getElementById("header1").innerHTML="اقتراحات";
   
    document.getElementById("header4").innerHTML="";
    document.getElementById("sug1-1").innerHTML=" على ماذا يقوم الحكم في المملكة العربية السعودية                               ";
    // document.getElementById("sug1-2").innerHTML="المادة الثاني";
    // document.getElementById("sug1-3").innerHTML="المادة الثالث";

    document.getElementById("header2").innerHTML="";
    document.getElementById("sug2-1").innerHTML="هل ترعى الدولة العلوم والآداب والثقافة و ماهو اسم النظام وكم رقم المادة؟";
    // document.getElementById("sug2-2").innerHTML="المادة الثاني";
    // document.getElementById("sug2-3").innerHTML="المادة الثالث";

    document.getElementById("header3").innerHTML=" ";
    document.getElementById("sug3-1").innerHTML="هل يستمد الحكم في المملكة العربية السعودية سلطته من كتاب الله تعالى وماهو النظام والمادة؟";
    // document.getElementById("sug3-2").innerHTML="المادة الثاني";
    // document.getElementById("sug3-3").innerHTML="المادة الثالث";

    const userInput = document.getElementById("user-input");
    userInput.style.direction = userInput.style.direction = "rtl";
    document.getElementById("user-input").setAttribute("placeholder", "اكتب رسالتك هنا ...");


});

document.getElementById("en").addEventListener("click", function (event) {
          
    document.getElementById("en").hidden = true;
    document.getElementById("ar").hidden = false;
    
    document.getElementById("header1").style.paddingLeft = "30px";
    document.getElementById("header1").innerHTML="Suggestions";

    document.getElementById("header4").innerHTML="";
    document.getElementById("sug1-1").innerHTML="Upon what does the rule in the Kingdom of Saudi Arabia rest?";
    // document.getElementById("sug1-2").innerHTML="Legal_2";
    // document.getElementById("sug1-3").innerHTML="Legal_3";

    document.getElementById("header2").innerHTML="";
    document.getElementById("sug2-1").innerHTML="Does the state nurture sciences, arts, and culture, and what is the system's name and the article's number?";
    // document.getElementById("sug2-2").innerHTML="Legal_2";
    // document.getElementById("sug2-3").innerHTML="Legal_3";

    document.getElementById("header3").innerHTML="";
    document.getElementById("sug3-1").innerHTML="Does the rule in the Kingdom of Saudi Arabia derive its authority from the Book of Allah (the Quran)? What is the system and article?";
    // document.getElementById("sug3-2").innerHTML="Legal_2";
    // document.getElementById("sug3-3").innerHTML="Legal_3";

    const userInput = document.getElementById("user-input");
    userInput.style.direction = userInput.style.direction = "ltr";
    document.getElementById("user-input").setAttribute("placeholder", "Write your message here...");

});


});

fetch('/main' , {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    } 
})
    .then(response => response.ok).catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });



//     // إضافة مستمع للنقر على الاقتراحات في صندوق الاقتراحات
//     document.getElementById("suggested-phrases").addEventListener("click", function (event) {
//         if (event.target.classList.contains("suggested-phrase")) {
//             const suggestedPhrase = event.target.textContent;
//             const language = languageSelect.value; // تحصل على اللغة من القائمة المنسدلة
//             sendMessageWithSuggestion(suggestedPhrase, language);
//         }
//     });


// // دالة لإرسال الرسالة المقترحة إلى الموديل مع الخيار المختار
// function sendMessageWithSuggestion(suggestion, language) {
//     appendMessage("User: " + suggestion); // إضافة الاقتراح إلى سجل الدردشة

//     // إرسال الاقتراح والعنوان إلى دالة Legal_Researcher
//     fetch('/backend', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             message: suggestion,
//             language: language
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         const botResponse = data.message;
//         appendMessage("Legal Researcher: " + botResponse);
//     });
// }




// ********************  call
