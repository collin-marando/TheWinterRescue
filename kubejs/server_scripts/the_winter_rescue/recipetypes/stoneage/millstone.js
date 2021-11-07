onEvent('recipes', (event) => {
    const recipes = [
        millstoneRecipe(Item.of('kubejs:impure_alumina_dust', 2), Item.of('rankine:alumina'),
            Item.of('kubejs:impure_alumina_dust'), 0.4, 2),
        millstoneRecipe(Item.of('kubejs:kaolin_dust'), Item.of('rankine:kaolinite_ball'),
            Item.of('kubejs:kaolin_dust'), 0.3, 1),
        millstoneRecipe(Item.of('frostedheart:rye_flour'), Item.of('frostedheart:rye'),
            Item.of('frostedheart:rye_flour'), 0.2, 1),
		millstoneRecipe(Item.of('minecraft:redstone'), Item.of('rankine:cinnabar'),
            Item.of('minecraft:redstone'), 0.8, 1)
    ]
	const recipesnf= [
		millstoneRecipe(Item.of('kubejs:anthracite_dust'), Item.of('rankine:anthracite_coal'),
            null, 0, 1),
		millstoneRecipe(Item.of('kubejs:bituminous_coal_dust'), Item.of('rankine:bituminous_coal'),
            null, 0, 1),
		millstoneRecipe(Item.of('kubejs:lignite_dust'), Item.of('rankine:lignite'),
            null, 0, 1),
		millstoneRecipe(Item.of('kubejs:subbituminous_coal_dust'), Item.of('rankine:subbituminous_coal'),
            null, 0, 1),
		millstoneRecipe(Item.of('kubejs:coal_dust'), Item.of('minecraft:coal'),
            null, 0, 1),
		millstoneRecipe(Item.of('kubejs:charcoal_dust'), Item.of('minecraft:charcoal'),
            null, 0, 1)
    ]
    recipes.forEach((recipe) => {
        event.custom({
            "type": "stone_age:millstone",
            "ingredient": recipe.ingredients.toJson(),
            "activateCount": recipe.activateCount,
            "result": recipe.result.toResultJson(),
            "secondResult": recipe.secondResult.toResultJson(),
            "secondChance": recipe.secondChance
        })
    });
	recipesnf.forEach((recipe) => {
        event.custom({
            "type": "stone_age:millstone",
            "ingredient": recipe.ingredients.toJson(),
            "activateCount": recipe.activateCount,
            "result": recipe.result.toResultJson(),
            "secondChance": recipe.secondChance
        })
    })
});