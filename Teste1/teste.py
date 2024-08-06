import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress

# Dados fornecidos
concentration = np.array([4, 10, 15, 20])
absorbance = np.array([0.275, 0.727, 1.074, 1.390])

# Regressão linear
slope, intercept, r_value, p_value, std_err = linregress(concentration, absorbance)

# Predição dos valores para a linha de melhor ajuste
predicted_absorbance = intercept + slope * concentration

# Plotagem
plt.scatter(concentration, absorbance, color='blue', label='Dados experimentais')
plt.plot(concentration, predicted_absorbance, color='red', label='Linha de melhor ajuste')
plt.xlabel('Concentração (mg/L)')
plt.ylabel('Absorbância')
plt.title('Curva de Calibração para Paracetamol')
plt.legend()
plt.grid(True)
plt.show()

# Resultados da regressão
slope, intercept
