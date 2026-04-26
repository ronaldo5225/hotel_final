# 🚀 Configuración de MongoDB Atlas

## Opción 1: MongoDB Atlas (Cloud) - RECOMENDADO ⭐

### Paso 1: Crear cuenta en MongoDB Atlas
1. Visita: https://www.mongodb.com/cloud/atlas
2. Haz clic en **"Sign Up Free"**
3. Completa el registro con tu email

### Paso 2: Crear un Cluster
1. Después de registrarte, haz clic en **"Create"** para un nuevo proyecto
2. Selecciona **"Build a Cluster"**
3. Elige el plan **"Free"** (M0)
4. Elige tu región (la más cercana a ti)
5. Haz clic en **"Create Cluster"** (espera 3-5 minutos)

### Paso 3: Configurar acceso
1. Ve a **"Database Access"** en el menú lateral
2. Haz clic en **"Add Database User"**
3. Crea un usuario con:
   - **Username**: `hotel_admin`
   - **Password**: (genera una segura)
4. Haz clic en **"Add User"**

### Paso 4: Whitelist de IP
1. Ve a **"Network Access"**
2. Haz clic en **"Add IP Address"**
3. Selecciona **"Allow access from anywhere"** (para desarrollo)
4. Haz clic en **"Confirm"**

### Paso 5: Obtener la URI de conexión
1. Ve a tu cluster
2. Haz clic en **"Connect"**
3. Selecciona **"Connect your application"**
4. Copia la URI (debe verse como):
```
mongodb+srv://hotel_admin:PASSWORD@cluster0.xxxxx.mongodb.net/hotel_final?retryWrites=true&w=majority
```

### Paso 6: Actualizar el `.env`
Reemplaza `PASSWORD` con tu contraseña y luego actualiza el archivo `.env`:

```bash
PORT=5000
MONGO_URI=mongodb+srv://hotel_admin:PASSWORD@cluster0.xxxxx.mongodb.net/hotel_final?retryWrites=true&w=majority
```

---

## Opción 2: MongoDB Community (Instalación local)

Si prefieres instalar MongoDB localmente en tu máquina, necesitas:

### Ubuntu/Debian con WSL2
```bash
# Instalar dependencias
sudo apt-get install libssl1.1 gnupg wget

# Descargar MongoDB
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-debian11-5.0.25.tgz

# Extraer
tar -xzf mongodb-linux-x86_64-debian11-5.0.25.tgz
sudo mv mongodb-linux-x86_64-debian11-5.0.25 /opt/mongodb

# Crear carpeta de datos
mkdir -p ~/data/mongodb
chmod -R 755 ~/data/mongodb

# Iniciar MongoDB
/opt/mongodb/bin/mongod --dbpath ~/data/mongodb --logpath ~/data/mongodb/mongod.log --fork
```

---

## Verificar la conexión

Una vez configurado, prueba la conexión:

```bash
cd backend
npm install
node server.js
```

Deberías ver en la consola:
```
✅ Conexión exitosa a MongoDB
🚀 Servidor corriendo en http://localhost:5000
```

---

## Troubleshooting

### ❌ Error: "connection refused"
- Verifica que MongoDB Atlas esté activo
- Confirma que tu IP está en la whitelist
- Revisa la URI de conexión

### ❌ Error: "authentication failed"
- Verifica el usuario y contraseña en la URI
- Asegúrate de haber creado el usuario en "Database Access"

### ❌ Error: "network timeout"
- Verifica tu conexión a internet
- Intenta agregar tu IP específica en "Network Access"

---

¿Necesitas ayuda con algún paso? 🤔
