<template>
  <div class="register-page">
    <router-link to="/" class="home-icon-link" title="На главную">
      <img src="@/assets/icons/home.svg" alt="На главную" />
    </router-link>
    <div class="register-container">
      <div class="register-header">
        <img src="@/assets/logo.svg" alt="Buyursin logo" class="register-logo" />
        <h1 class="register-title">Создать аккаунт</h1>
        <p class="register-subtitle">Присоединяйтесь к сообществу Buyursin</p>
      </div>

      <!-- Этап 1: Основные данные -->
      <form v-if="step === 1" @submit.prevent="handleStep1" class="register-form">
        <div class="form-group">
          <div class="input-wrapper">
            <div class="input-icon">📱</div>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              class="form-input"
              placeholder="Номер телефона"
              required
            />
          </div>
        </div>

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
            <button type="button" @click="showPassword = !showPassword" class="password-toggle">
              <img :src="showPassword ? eyeOpenIcon : eyeClosedIcon" alt="Toggle password visibility">
            </button>
          </div>
        </div>

        <div class="form-group">
          <div class="input-wrapper">
            <div class="input-icon">✅</div>
            <input
              id="confirmPassword"
              v-model="formData.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              class="form-input"
              placeholder="Подтвердите пароль"
              required
            />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="password-toggle">
              <img :src="showConfirmPassword ? eyeOpenIcon : eyeClosedIcon" alt="Toggle password visibility">
            </button>
          </div>
          <span v-if="passwordError" class="error-text">{{ passwordError }}</span>
        </div>

        <button type="submit" class="btn-primary" :disabled="loading || !isFormValid">
          <span v-if="loading" class="loading-spinner"></span>
          {{ loading ? 'Отправка...' : 'Продолжить' }}
        </button>

        <div class="register-links">
          <router-link to="/login" class="link">Уже есть аккаунт? Войти</router-link>
        </div>
      </form>

      <!-- Этап 2: OTP код -->
      <form v-if="step === 2" @submit.prevent="handleStep2" class="register-form">
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
          {{ loading ? 'Создание аккаунта...' : 'Создать аккаунт' }}
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
  name: 'RegisterPage',
  data() {
    return {
      step: 1,
      loading: false,
      resendTimer: 0,
      showPassword: false,
      showConfirmPassword: false,
      formData: {
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        otp: ''
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
    },
    passwordError() {
      if (this.formData.confirmPassword && this.formData.password !== this.formData.confirmPassword) {
        return 'Пароли не совпадают';
      }
      if (this.formData.password && this.formData.password.length < 6) {
        return 'Пароль должен содержать минимум 6 символов';
      }
      return '';
    },
    isFormValid() {
      return this.formData.phone && 
             this.formData.username && 
             this.formData.password && 
             this.formData.confirmPassword && 
             !this.passwordError;
    }
  },
  methods: {
    async handleStep1() {
      if (!this.isFormValid) return;
      
      this.loading = true;
      try {
        // Здесь будет API запрос для отправки OTP
        console.log('Отправка OTP для регистрации:', this.formData.phone);
        
        // Имитация API запроса
        await new Promise(resolve => setTimeout(resolve, 1000));
        
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
        // Здесь будет API запрос для создания аккаунта
        console.log('Создание аккаунта с OTP:', this.formData.otp);
        
        // Имитация API запроса
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Успешная регистрация
        this.$router.push('/login');
      } catch (error) {
        console.error('Ошибка при создании аккаунта:', error);
      } finally {
        this.loading = false;
      }
    },
    
    async resendOtp() {
      if (this.resendTimer > 0) return;
      
      this.loading = true;
      try {
        // Здесь будет API запрос для повторной отправки OTP
        console.log('Повторная отправка OTP для регистрации');
        
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
    }
  }
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-purple) 0%, var(--light-purple) 100%);
  padding: 20px;
}

.register-container {
  background: var(--white-color);
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(123, 44, 191, 0.1);
}

.register-header {
  text-align: center;
  margin-bottom: 32px;
}

.register-logo {
  height: 48px;
  margin-bottom: 16px;
}

.register-title {
  font-size: 28px;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0 0 8px 0;
}

.register-subtitle {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.register-form {
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

.error-text {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
  padding-left: 16px;
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

.register-links {
  text-align: center;
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

.home-icon-link {
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
  z-index: 10;
}

.home-icon-link:hover {
  background-color: rgba(255, 255, 255, 1);
}

.home-icon-link img {
  width: 20px;
  height: 20px;
  opacity: 0.7;
}

@media (max-width: 600px) {
  .register-container {
    padding: 24px;
    margin: 10px;
  }
  
  .register-title {
    font-size: 24px;
  }
  
  .form-input {
    font-size: 16px;
  }

  .btn-primary {
    padding: 14px;
  }
}
</style> 