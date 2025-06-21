<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__left">
        <ul>
          <li>Home</li>
          <li>Catalogue</li>
          <li>About us</li>
          <li>Privacy Policy</li>
          <li>Contacts</li>
          <li>User Agreement</li>
        </ul>
      </div>
      <div class="footer__center">
        <div>Information phone:</div>
        <div>+998 (90) 123-45-67</div>
        <div>+998 (91) 123-45-67</div>
      </div>
      <div class="footer__right">
        <div>Buyursin in social networks</div>
        <div class="footer__socials">
          <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg" alt="Telegram" /></a>
          <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>

<style scoped>
.footer {
  background: var(--secondary-color);
  color: #fff;
  padding: 40px 0 20px 0;
  margin-top: 60px;
}

.footer__container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 95px;
  align-items: flex-start;
}

.footer__left ul {
  list-style: none;
  padding: 0;
}
.footer__left li {
  margin-bottom: 8px;
  font-size: 14px;
}
.footer__center {
  font-size: 14px;
  line-height: 1.7;
}
.footer__right {
  font-size: 14px;
}
.footer__socials {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}
.footer__socials img {
  width: 22px;
  height: 22px;
  filter: brightness(0) invert(1);
}
@media (max-width: 900px) {
  .footer__container {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
}
@media (max-width: 600px) {
  .footer {
    padding: 20px 0 10px 0;
    margin-top: 20px;
  }
  .footer__left li,
  .footer__center,
  .footer__right {
    font-size: 12px;
  }
  .footer__socials img {
    width: 18px;
    height: 18px;
  }
}
</style> 