function calculateGrade(students)
{
    const result = [];
    for(const student of students)
    {
        let sum = 0;
        for(let i = 0; i < student.scores.length; i++)
        {
            sum += student.scores[i];
        }
        const average = sum / student.scores.length;
        let grade;
        if(average >= 90) grade = "A";
        else if(average >= 80) grade = "B";
        else if(average >= 70) grade = "C";
        else grade = "F";
        result.push({
            name: student.name,
            scores: student.scores,
            average: Number(average.toFixed(2)),
            grade: grade
        })
    }
    return result;
    
}
const students = [
    { name: "Алексей", scores: [85, 92, 78] },
    { name: "Мария", scores: [95, 87, 92] }
];
console.log(calculateGrade(students));




const filterProducts = (products, filters) =>
{
    const result = [];
    if(!filters) return products;
    for(const product of products)
    {
        let flag = true;
        if(!!filters.maxPrice) //if(filters.maxPrice) вернет false если maxPrice = 0, хотя 0 - валидное значение цены.
        {
            if(product.price > filters.maxPrice) flag = false;
        }
        if(!!filters.category)
        {
            if(product.category !== filters.category) flag = false; //Строгое сравнение !== не делает неявных преобразований типов, что предотвращает скрытые баги.
        }
        if(flag)
        {
            result.push({
            name: product.name,
            price: product.price,
            category: product.category
            });
        }
    }
   
    return result;
}
const products = [
    { name: "Ноутбук", price: 50000, category: "электроника" },
    { name: "Стул", price: 5000, category: "мебель" },
    { name: "Кофеварка", price: 15000, category: "электроника" }
];
const filters = { maxPrice: 20000 };
console.log(filterProducts(products, filters));
