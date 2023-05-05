exports.homeInfo = async (req, res, next) => {
    const info = {
      message: "O servidor está rodando!",
      instructions: "Os dados de horas e minutos devem ser incluidos na URL",
      dataformat: "http://localhost:8080/api/clock/HORAS/MINUTOS"
    };
  
    res.json({ info });
  };
  