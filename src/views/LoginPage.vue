<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <img src="@/assets/logo.svg" alt="Buyursin logo" class="login-logo" />
        <h1 class="login-title">Войти в аккаунт</h1>
        <p class="login-subtitle">Добро пожаловать обратно!</p>
      </div>

      <!-- Этап 1: Логин и пароль -->
      <form v-if="step === 1" @submit.prevent="handleStep1" class="login-form">
        <div class="form-group">
          <div class="input-wrapper">
            <div class="input-icon">👤</div>
            <input
              id="username"
              v-model="formData.username"
              type="text"
              class="form-input"
              placeholder="Логин"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <div class="input-wrapper">
            <div class="input-icon">🔒</div>
            <input
              id="password"
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-input"
              placeholder="Пароль"
              required
            />
            <button type="button" @click="togglePasswordVisibility" class="password-toggle">
              <img :src="showPassword ? eyeOpenIcon : eyeClosedIcon" alt="Toggle password visibility">
            </button>
          </div>
        </div>

        <button type="submit" class="btn-primary" :disabled="loading">
          <span v-if="loading" class="loading-spinner"></span>
          {{ loading ? 'Отправка...' : 'Продолжить' }}
        </button>

        <div class="login-links">
          <router-link to="/register" class="link">Создать аккаунт</router-link>
          <router-link to="/forgot-password" class="link">Забыли пароль?</router-link>
        </div>
      </form>

      <!-- Этап 2: OTP код -->
      <form v-if="step === 2" @submit.prevent="handleStep2" class="login-form">
        <div class="otp-info">
          <div class="otp-icon">📲</div>
          <h3>Подтверждение номера</h3>
          <p>Код подтверждения отправлен на номер</p>
          <p class="phone-number">{{ maskedPhone }}</p>
        </div>

        <div class="form-group">
          <div class="otp-input-wrapper">
            <input
              id="otp"
              v-model="formData.otp"
              type="text"
              class="form-input otp-input"
              placeholder="000000"
              maxlength="6"
              required
            />
          </div>
        </div>

        <button type="submit" class="btn-primary" :disabled="loading">
          <span v-if="loading" class="loading-spinner"></span>
          {{ loading ? 'Проверка...' : 'Войти' }}
        </button>

        <div class="otp-actions">
          <button type="button" @click="resendOtp" class="btn-link" :disabled="resendTimer > 0">
            {{ resendTimer > 0 ? `Отправить снова (${resendTimer}s)` : 'Отправить код снова' }}
          </button>
          <button type="button" @click="step = 1" class="btn-link">Назад</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import eyeOpenIcon from '@/assets/icons/eye-open.svg';
import eyeClosedIcon from '@/assets/icons/eye-closed.svg';

export default {
  name: 'LoginPage',
  data() {
    return {
      step: 1,
      loading: false,
      resendTimer: 0,
      showPassword: false,
      formData: {
        username: '',
        password: '',
        otp: '',
        phone: ''
      },
      eyeOpenIcon,
      eyeClosedIcon
    }
  },
  computed: {
    maskedPhone() {
      if (!this.formData.phone) return '';
      const phone = this.formData.phone.toString();
      return `+998 ${phone.slice(0, 2)} *** ${phone.slice(-2)}`;
    }
  },
  methods: {
    async handleStep1() {
      this.loading = true;
      try {
        // Здесь будет API запрос для отправки OTP
        console.log('Отправка OTP для:', this.formData.username);
        
        // Имитация API запроса
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Получаем номер телефона (в реальном приложении придет с сервера)
        this.formData.phone = '901234567';
        
        this.step = 2;
        this.startResendTimer();
      } catch (error) {
        console.error('Ошибка при отправке OTP:', error);
      } finally {
        this.loading = false;
      }
    },
    
    async handleStep2() {
      this.loading = true;
      try {
        // Здесь будет API запрос для проверки OTP
        console.log('Проверка OTP:', this.formData.otp);
        
        // Имитация API запроса
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Успешная авторизация
        this.$router.push('/');
      } catch (error) {
        console.error('Ошибка при проверке OTP:', error);
      } finally {
        this.loading = false;
      }
    },
    
    async resendOtp() {
      if (this.resendTimer > 0) return;
      
      this.loading = true;
      try {
        // Здесь будет API запрос для повторной отправки OTP
        console.log('Повторная отправка OTP');
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        this.startResendTimer();
      } catch (error) {
        console.error('Ошибка при повторной отправке OTP:', error);
      } finally {
        this.loading = false;
      }
    },
    
    startResendTimer() {
      this.resendTimer = 60;
      const timer = setInterval(() => {
        this.resendTimer--;
        if (this.resendTimer <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    },
    
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-purple) 0%, var(--light-purple) 100%);
  padding: 20px;
}

.login-container {
  background: var(--white-color);
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(123, 44, 191, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 32px;
}

.login-logo {
  height: 48px;
  margin-bottom: 16px;
}

.login-title {
  font-size: 28px;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0 0 8px 0;
}

.login-subtitle {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 16px;
  padding: 4px;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  background: var(--bg-purple);
  box-shadow: 0 0 0 2px var(--primary-color);
}

.input-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--primary-color);
}

.form-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  background: transparent;
  font-size: 16px;
  outline: none;
}

.form-input::placeholder {
  color: #999;
}

.password-toggle {
  background: none;
  border: none;
  padding: 0 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-toggle img {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.password-toggle:hover img {
  opacity: 1;
}

.otp-input-wrapper {
  display: flex;
  justify-content: center;
}

.otp-input {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 8px;
  background: var(--bg-purple);
  border-radius: 16px;
  padding: 16px;
  max-width: 200px;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary:hover:not(:disabled) {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(123, 44, 191, 0.3);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.login-links {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 14px;
}

.link:hover {
  text-decoration: underline;
}

.otp-info {
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  background: var(--bg-purple);
  border-radius: 16px;
}

.otp-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.otp-info h3 {
  color: var(--primary-color);
  margin: 0 0 8px 0;
  font-size: 18px;
}

.otp-info p {
  margin: 4px 0;
  color: var(--text-color);
}

.phone-number {
  font-weight: bold;
  color: var(--primary-color);
  font-size: 18px;
}

.otp-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.btn-link {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
}

.btn-link:hover:not(:disabled) {
  color: var(--secondary-color);
}

.btn-link:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  text-decoration: none;
}

@media (max-width: 600px) {
  .login-container {
    padding: 24px;
    margin: 10px;
  }
  
  .login-title {
    font-size: 24px;
  }
  
  .form-input {
    font-size: 16px;
  }

  .btn-primary {
    padding: 14px;
  }

  .otp-input {
    letter-spacing: 4px;
    padding: 12px;
    font-size: 20px;
  }
}
</style> 