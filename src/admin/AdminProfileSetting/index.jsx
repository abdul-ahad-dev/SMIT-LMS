import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


function AdminProfileSetting() {
	return (
		<div className="space-y-6 p-10 pb-16">
			<div className="space-y-0.5">
				<h2 className="text-2xl font-bold tracking-tight">Profile Settings</h2>
				<p className="text-muted-foreground">
					Manage your account information and activity logs.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Personal Information</CardTitle>
					<CardDescription>Update your personal details and preferences.</CardDescription>
				</CardHeader>
				<CardContent>
					{/* Personal Information form will go here */}
				</CardContent>
			</Card>

			{/* Additional sections will be added here */}
		</div>
	)
}

export default AdminProfileSetting;