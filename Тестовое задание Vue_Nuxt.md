# Тестовое задание Vue/Nuxt

Задание представляет собой имитацию каталога интернет-магазина с API Bitrix  
Задача состоит в реализации маршрутизации, которая будет индексироваться как оригинальные маршруты bitrix с учетом фильтрации списка.

Ниже представлены примеры маршрутов и описание страниц на них, которые вам, в рамках тестового задания, необходимо реализовать в Nuxt 3 или Vue 3:

Страница вложенной на 2 уровня подкатегории с тремя выбранными фильтрами:  
`/catalog/category/subcategory_1/subcategory_2/filter/filter_1/filter_2/filter_3/apply/`

Страница категории:  
`/catalog/category/`

Страница вложенной на 2 уровня подкатегории:  
`/catalog/category/subcategory_1/subcategory_2`

Также необходимо создать хранилище для каталога в котором будут храниться кода активных из URL фильтров, например: `[‘filter_1’, ‘filter_2’]`  
Также необходимо добавить метод, который будет добавлять в URL код фильтра (представляем ситуацию что пользователь выбрал еще один фильтр), например:

Был маршрут:   
`/catalog/category/subcategory_1/subcategory_2/filter/filter_1/filter_2/apply/`  
Стал:  
`/catalog/category/subcategory_1/subcategory_2/filter/filter_1/filter_2/filter_3/apply/`

Сам фильтр реализовывать не нужно. Необходимо только написать метод который будет обновлять URL без перезагрузки страницы, при этом сохранять реактивность, т.е в массив фильтров в хранилище код должен реактивно добавиться, т.е стать таким: `[‘filter_1’, ‘filter_2’, ‘filter_3’]`

Какие компоненты должны загружаться по маршрутизации:

На маршруте: `/catalog` \- корневая страница каталога  
На маршруте: `/catalog/category` \- категория каталога  
На маршруте: `/catalog/category/subcategory_ -` любая вложенность подкатегорий  
На маршруте: `/catalog/category/filter/…/apply/` \- категория с выбранными фильтрами  
На маршруте: `/catalog/category/subcategory_/filter/…/apply` \- любая вложенная подкатегория с выбранными фильтрами

В самих компонентах чтобы они не были пустые можно выводить заголовки или данные маршрута для демонстрации работы компонентов страниц.

## Требования:

1. Соответствие ТЗ  
2. Исходный код загружен в публичный репозиторий, предоставлена ссылка на репозиторий  
3. **\[необязательно\]** тестовое задание выгружено на хостинг/сервер для демонстрации