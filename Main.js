<script>
        const moreInfoButton = document.getElementById('moreInfoButton');
        const moreInfo = document.getElementById('moreInfo');

        moreInfoButton.addEventListener('click', () => {
            if (moreInfo.style.display === 'none') {
                moreInfo.style.display = 'block';
                moreInfoButton.textContent = 'Less Info';
            } else {
                moreInfo.style.display = 'none';
                moreInfoButton.textContent = 'More Info';
            }
        });
    </script>