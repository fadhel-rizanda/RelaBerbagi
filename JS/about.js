function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex' 
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
}

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isActive = question.classList.contains('active');

            // Hide all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });

            // Remove active class from all questions
            document.querySelectorAll('.faq-question').forEach(ques => {
                ques.classList.remove('active');
            });

            if (!isActive) {
                // Show the clicked answer
                answer.style.display = 'block';
                // Add active class to the clicked question
                question.classList.add('active');
            }
        });
    });
});
