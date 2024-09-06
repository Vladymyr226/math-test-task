function findMissingNumbers(arr, N) {
  // Вычисляем полную сумму и сумму квадратов
  const fullSum = (N * (N + 1)) / 2
  const fullSumSquares = (N * (N + 1) * (2 * N + 1)) / 6

  // Вычисляем фактическую сумму и сумму квадратов
  let actualSum = 0
  let actualSumSquares = 0

  for (let num of arr) {
    actualSum += num
    actualSumSquares += num * num
  }

  // Находим сумму и сумму квадратов пропавших чисел
  const sumMissing = fullSum - actualSum // x + y
  const sumSquaresMissing = fullSumSquares - actualSumSquares // x^2 + y^2

  // Решаем систему уравнений:
  // x + y = sumMissing
  // x^2 + y^2 = sumSquaresMissing
  // x * y = (sumMissing^2 - sumSquaresMissing) / 2

  const productMissing = (sumMissing * sumMissing - sumSquaresMissing) / 2

  const discriminant = Math.sqrt(sumMissing * sumMissing - 4 * productMissing)
  const x = (sumMissing + discriminant) / 2
  const y = (sumMissing - discriminant) / 2

  return [x, y]
}

// Пример использования:
const N = 10 // Измените значение N для своих тестов
const sequence = [1, 2, 4, 5, 6, 7, 8, 9, 10] // Пример последовательности с пропущенными числами
console.log(findMissingNumbers(sequence, N))
