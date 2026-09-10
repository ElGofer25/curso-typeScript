temperature = float(input('Put your temperature in celsius, please: '))

if temperature <= 0:
    print('Frío')

elif 11 <= temperature <= 24:
    print('Templado')

elif 25 <= temperature <= 34:
    print('Caliente')

elif 35 <= temperature <= 40:
    print('Muy caliente')

elif 0 < temperature > 40:
    print ('Temperatura extrema')


# TODO: ENABLE DE INLINE SUGGESTIONS WITH CMD=SHIFT+ INLINE SUGGESTIONS