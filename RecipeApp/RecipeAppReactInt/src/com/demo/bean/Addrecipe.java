package com.demo.bean;

public class Addrecipe {
	
	private int recipeId;
	private String recipeName;
	private String chef;
	private String ingredients;
	private String procedure;
	private String email;
	private String status;
	private String date;
	public Addrecipe() {
		super();
	}
	
	public Addrecipe(int recipeId, String recipeName, String chef, String ingredients, String procedure, String email,
			String status,String date) {
		super();
		this.recipeId = recipeId;
		this.recipeName = recipeName;
		this.chef = chef;
		this.ingredients = ingredients;
		this.procedure = procedure;
		this.email = email;
		this.status = status;
		this.date=date;
	}
	public int getRecipeId() {
		return recipeId;
	}
	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}
	public String getRecipeName() {
		return recipeName;
	}
	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}
	public String getChef() {
		return chef;
	}
	public void setChef(String chef) {
		this.chef = chef;
	}
	public String getIngredients() {
		return ingredients;
	}
	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}
	public String getProcedure() {
		return procedure;
	}
	public void setProcedure(String procedure) {
		this.procedure = procedure;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Addrecipe [recipeId=" + recipeId + ", recipeName=" + recipeName + ", chef=" + chef + ", ingredients="
				+ ingredients + ", procedure=" + procedure + ", email=" + email + ", status=" + status + ", date="
				+ date + "]";
	}

	
	

}
